import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { MotionDiv } from './components/MotionWrapper';
import AgeResult from './components/AgeResult';
import AgeForm from './components/AgeForm';

const currentYear = new Date().getFullYear();

const schema = z.object({
  day: z
    .string()
    .nonempty('This field is required')
    .regex(/^\d+$/, 'Must be a valid day')
    .transform((s) => parseInt(s, 10))
    .refine((d) => d >= 1 && d <= 31, { message: 'Must be a valid day' }),

  month: z
    .string()
    .nonempty('This field is required')
    .regex(/^\d+$/, 'Must be a valid month')
    .transform((s) => parseInt(s, 10))
    .refine((m) => m >= 1 && m <= 12, { message: 'Must be a valid month' }),

  year: z
    .string()
    .nonempty('This field is required')
    .regex(/^\d+$/, 'Must be a valid year')
    .transform((s) => parseInt(s, 10))
    .refine((y) => y <= currentYear, { message: 'Must be in the past' }),
});

export default function App() {
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const [age, setAge] = useState({
    day: '--',
    month: '--',
    year: '--',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: { day: '', month: '', year: '' },
  });

  useEffect(() => {
    const handleGet = async () => {
      try {
        const resp = await fetch('https://pget.vercel.app');
        const data = await resp.json();
        setPortfolioUrl(data.portfolio);
      } catch (e) {
        console.log(e);
      }
    };
    handleGet();
  }, []);

  const onSubmit = (data) => {
    const d = data.day;
    const m = data.month;
    const y = data.year;

    const now = new Date();

    let ageYears = now.getFullYear() - y;
    let ageMonths = now.getMonth() + 1 - m;
    let ageDays = now.getDate() - d;

    if (ageDays < 0) {
      ageMonths -= 1;
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      ageDays += previousMonth;
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({
      day: ageDays.toString(),
      month: ageMonths.toString(),
      year: ageYears.toString(),
    });
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100 p-4 font-['Poppins'] sm:p-6 lg:p-8">
      <div className="flex w-full flex-1 items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-210 rounded-4xl rounded-br-[6rem] bg-white px-6 py-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] sm:space-y-12 sm:rounded-[3rem] sm:rounded-br-[10rem] sm:p-12 lg:p-14"
        >
          <AgeForm register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />

          <AgeResult age={age} />
        </MotionDiv>
      </div>

      <footer className="mt-4 w-full text-center">
        <div className="text-xs text-gray-500">
          <p>
            Built by{' '}
            <a
              href={portfolioUrl}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaushik Verma
            </a>{' '}
            with React and Tailwind CSS.
          </p>
          <p>Design inspired by Frontend Mentor's Age Calculator App challenge.</p>
        </div>
      </footer>
    </div>
  );
}
