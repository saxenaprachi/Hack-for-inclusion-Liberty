const people = [
    {
      ID: 'BD123',
      Skills: 'Regional Paradigm Technician',
      education: 'Optimization',
      role: 'Backend Dev',
      Status:'Under Review',
      href:'/dashboard/applicants/sm123'
      },
    {
      ID: 'BD124',
      Skills: 'Regional Paradigm Technician',
      education: 'Optimization',
      role: 'Backend Dev',
      Status:'Under Review'
      },
    {
      ID: 'BD125',
      Skills: 'Regional Paradigm Technician',
      education: 'Optimization',
      role: 'Backend Dev',
      Status:'Under Review'
      },
    // More people...
  ]
  
  export default function Applicants() {
    return (
      <div className="flex flex-col w-5/6 md:ml-20">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ApplicantID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Skills
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Approval
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                      <a href={person.href}>
                            <div className="text-sm font-medium text-gray-900">{person.ID}</div>
                            </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.Skills}</div>
                        <div className="text-sm text-gray-500">{person.education}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.Status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Shortlist
                        </a>
                      </td>
                      
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }