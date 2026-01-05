import React, { useState } from 'react'
import Filters from '../../../components/analytica/Filters';
import GridAnalytical from '../../../components/owner/GridAnalytical';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../../components/helpers/Title';
import GridAnalyticalCategory from '../../../components/owner/GridAnalyticalCategory';

const AnalyticalOwner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    date: "",
    search: "",
  });

  return (
    <main className="bg-bg min-h-screen text-text overflow-hidden w-full">

      <div className='p-4'>
        {isOpen ?
          <Title title='Аналітичні огляди' subtitle='Додавайте, видаляйте та редагуєйте аналітичні огляди' />
          :
          <Title title='Категорії аналітичних оглядів' subtitle='Додавайте, видаляйте та редагуєйте категорії' />
        }
      </div>

      <section className="my-8 mx-6 md:mx-16 lg:mx-24 xl:mx-40 bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        <button onClick={() => { setIsOpen(!isOpen) }} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]">{isOpen ? "котегорії" : "аналітика"}</button>

        {isOpen ?
          <button onClick={() => { navigate("/owner/addanalytical") }} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]">створити аналітику</button>
          :
          <button onClick={() => { navigate("/owner/addcategoryanalytical") }} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]">створити категорію</button>}

        {isOpen && <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded-xl text-xs lg:text-medium">
          <option value="" className='text-purple-600 text-xs lg:text-medium'>● всі статуси</option>
          <option value="draft" className='text-blue-600 text-xs lg:text-medium'>● чернетка</option>
          <option value="review" className='text-yellow-600 text-xs lg:text-medium'>● на перевірці</option>
          <option value="published" className='text-green-600 text-xs lg:text-medium'>● опубліковано</option>
          <option value="archived" className='text-red-600 text-xs lg:text-medium'>● архів</option>
        </select>}
      </section>

      {isOpen &&
        <div>
          <Filters filters={filters} onChange={setFilters} />
          <GridAnalytical filters={filters} status={status} />
        </div>
      }
      {!isOpen &&
        <div>
          <GridAnalyticalCategory filters={filters} />
        </div>
      }
    </main>
  )
}

export default AnalyticalOwner
