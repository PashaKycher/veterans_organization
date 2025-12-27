import React, { useState } from 'react'
import Filters from '../../../components/analytica/Filters';
import GridAnalytical from '../../../components/owner/GridAnalytical';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../../components/helpers/Title';
import GridAnalyticalCategory from '../../../components/owner/GridAnalyticalCategory';

const AnalyticalOwner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    date: "",
    search: "",
  });

  return (
    <main className="bg-bg min-h-screen text-text overflow-hidden">

      <div className='p-4'>
        {isOpen ?
          <Title title='Аналітичні огляди' subtitle='Додавайте, видаляйте та редагуєйте аналітичні огляди' />
          :
          <Title title='Категорії аналітичних оглядів' subtitle='Додавайте, видаляйте та редагуєйте категорії' />
        }
      </div>

      <section className="my-8 mx-6 md:mx-16 lg:mx-24 xl:mx-40 bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        <button onClick={() => { setIsOpen(!isOpen) }} className='inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-blue-400 border-blue-700 text-white font-semibold hover:bg-blue-700 transition cursor-pointer'>{isOpen ? "котегорії" : "аналітика"}</button>

        {isOpen ?
          <button onClick={() => { navigate("/owner/addanalytical") }} className='inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-green-400 border-green-700 text-white font-semibold hover:bg-green-700 transition cursor-pointer'>cтворити</button>
          :
          <button onClick={() => { navigate("/owner/addcategoryanalytical") }} className='inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-green-400 border-green-700 text-white font-semibold hover:bg-green-700 transition cursor-pointer'>cтворити</button>}
      </section>

      {isOpen &&
        <div>
          <Filters filters={filters} onChange={setFilters} />
          <GridAnalytical filters={filters} />
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
