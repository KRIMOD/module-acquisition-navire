import { useState } from 'react'
import CardTable from 'components/CardTable'

export default function Home () {
  const [periode, setPeriode] = useState(5)
  const [investment, setInvestment] = useState(0)
  const [operatingCost, setOperatingCost] = useState(0)
  const [dryDock, setDryDock] = useState(0)
  const [roi, setRoi] = useState(0)

  const handleInvestmentChange = (e) => setInvestment(e.target.value)
  const handleOperatingCostChange = (e) => setOperatingCost(e.target.value)
  const handleDryDockChangeChange = (e) => setDryDock(e.target.value)
  const handleRoiChange = (e) => setRoi(e.target.value)

  return (
    <>
      <section className='max-w-xl p-6 mx-auto mt-4 bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-white'>Formule* d'acquisition NAVIRE</h2>

        <form>
          <div className='grid grid-cols-1 gap-6 mt-4 '>
            <div className='grid items-center grid-cols-2'>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='investment'>Investissement (US$ Million)</label>
              <input onChange={handleInvestmentChange} id='investment' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
            </div>

            <div className='grid items-center grid-cols-2'>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='operatingCost'>Coûts Opératoires</label>
              <input onChange={handleOperatingCostChange} id='operatingCost' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
            </div>

            <div className='grid items-center grid-cols-2'>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='dryDock'>Dry Dock US$ Mill (30 months)</label>
              <input onChange={handleDryDockChangeChange} id='dryDock' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
            </div>

            <div className='grid items-center grid-cols-2'>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='roi'>Retour sur Investissement</label>
              <input onChange={handleRoiChange} id='roi' type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <select
              className='mr-2 rounded-md'
              defaultValue={periode}
              onChange={(e) => setPeriode(e.target.value)}
            >
              <option value={5}>5 ans</option>
              <option value={10}>10 ans</option>
              <option value={15}>15 ans</option>
            </select>
            <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>Estimer</button>
          </div>
        </form>
      </section>
      <section className='max-w-4xl p-6 mx-auto mt-4 bg-white rounded-md shadow-md dark:bg-gray-800'>

        <CardTable periode={periode} />
        <p className='text-xs text-blueGray-600'>*Formule de calcule : Coûts annuels = Invest + OPEX + DRYDOCK + Investissement + ROI </p>

      </section>
    </>
  )
}
