import React from 'react'

export default function CardTable ({ periode, investment, dryDock, operatingCost }) {
  let previousAnnualCost = 0
  let sumzAcc = 0
  return (
    <>
      <div
        className='relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg'
      >
        <div className='px-4 py-3 mb-0 border-0 rounded-t'>
          <div className='flex flex-wrap items-center'>
            <div className='relative flex-1 flex-grow w-full max-w-full px-4'>
              <h3
                className='text-lg font-semibold text-blueGray-700'
              >
                Résultats
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                />
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                >
                  Investment
                </th>
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                >
                  OPEX
                </th>
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                >
                  DRY DOCKS
                </th>
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                >
                  Coûts annuel
                </th>
                <th
                  className='px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                />
              </tr>
            </thead>
            <tbody>
              {/* Contenu */}
              {Array(Number(periode))
                .fill()
                .map((_, index) => {
                  const investmentPerYear = periode !== 0 ? investment / periode : 0
                  const dryDockPerYear = periode !== 0 ? dryDock / periode : 0
                  const opex = operatingCost * 360
                  const annualCost = (index === 0) ? investmentPerYear + opex + dryDockPerYear + investment / periode : previousAnnualCost - investmentPerYear / periode
                  const sumz = annualCost / 12
                  sumzAcc += annualCost

                  previousAnnualCost = annualCost
                  return (
                    <tr className='text-xs text-blueGray-800' key={index}>
                      <th className='flex items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='flex-1 font-bold text-center '
                        >
                          {index + 1}
                        </span>
                      </th>
                      <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='ml-3 '
                        >
                          {/* X,XXX,XXX */}
                          {investmentPerYear.toLocaleString('en-US')}
                        </span>
                      </td>
                      <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='ml-3'
                        >
                          {/* X,XXX,XXX */}
                          {opex.toLocaleString('en-US')}
                        </span>
                      </td>
                      <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='ml-3'
                        >
                          {/* X,XXX,XXX */}
                          {dryDockPerYear.toLocaleString('en-US')}
                        </span>
                      </td>
                      <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='ml-3 '
                        >
                          {/* X,XXX,XXX */}
                          {annualCost.toLocaleString('en-US')}
                        </span>
                      </td>
                      <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <span
                          className='ml-3 '
                        >
                          {/* X,XXX,XXX */}
                          {sumz.toLocaleString('en-US')}
                        </span>
                      </td>
                    </tr>
                  )
                })}

              {/* Coûts total moyen */}
              <tr className='text-xs text-blueGray-700'>
                <th className='flex items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 text-sm font-bold'
                  >
                    Coût total moyen ($/An)
                  </span>
                </th>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 '
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3'
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3'
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 text-sm font-bold'
                  >{(sumzAcc / 10).toLocaleString('en-US')}
                  </span>
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 '
                  />
                </td>
              </tr>
              {/* Loyer moyen */}
              <tr className='text-xs text-blueGray-700'>
                <th className='flex items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 text-sm font-bold'
                  >
                    Loyer Moyen ($/An)
                  </span>
                </th>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 '
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3'
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3'
                  />
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 text-sm font-bold'
                  >
                    {/* X,XXX,XXX */}
                    {Math.round(((sumzAcc / 10) / 12)).toLocaleString('en-US')}
                  </span>
                </td>
                <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                  <span
                    className='ml-3 '
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
