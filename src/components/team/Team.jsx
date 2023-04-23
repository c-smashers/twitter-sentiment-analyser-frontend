import React from 'react'
import Member from './Member'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Team = () => {
    const members = [
        {
            id: 1,
            name: 'Anupam Sinha',
            role: 'Developer',
            description: 'dsjdjkdnkjnvkfnvkjfjjnvknfkfnk',
            githublink: 'htpps://github.com/ANU4247',
            linkedinlink: 'htpps://github.com/ANU4247'
        },
        {
            id: 2,
            name: 'Hemant Kumar Mandal',
            role: 'Developer',
            description: 'dsjdjkdnkjnvkfnvkjfjjnvknfkfnk',
            githublink: 'htpps://github.com/hemant1101',
            linkedinlink: 'htpps://github.com/ANU4247'
        },
        {
            id: 3,
            name: 'Satyakant Sinha',
            role: 'Developer',
            description: 'dsjdjkdnkjnvkfnvkjfjjnvknfkfnk',
            githublink: 'htpps://github.com/ANU4247',
            linkedinlink: 'htpps://github.com/ANU4247'
        }
    ]
    return (
        <ContentWrapper>
            <div className="p-8 bg-white rounded-lg shadow">
                <p className="text-3xl font-bold text-center text-violet-600">
                    Project Development Team
                </p>
                <p className="mb-12 text-xl font-normal text-center text-violet-500 ">
                    Meet the Best Team in the World.
                </p>
                <div className="flex flex-col items-center md:flex-row justify-evenly">
                    {members.map((x) => {
                        return <Member key={x.id} member={x} />
                    })}
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Team