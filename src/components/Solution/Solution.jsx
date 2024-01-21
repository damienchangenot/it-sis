import React from 'react'

export default function Solution({data}) {
  return (
    <article className='m-4'>
        <div className='container rounded-full border border-neutral-500 text-center'  style={{background: `url(${data[0]}) center/85% no-repeat`}}>
            <div className="block-trans transition w-full h-full rounded-full opacity-0 hover:opacity-100  relative top-0 left-0">
            <a href={data[2]} target="_blank" className='informations absolute top-1/2 w-full'>
                <h2 className='text-2xl font-bold'>{data[1]}</h2>
                <span>{data[3]}</span>
            </a>
            </div>
        </div>
    </article>
  )
}
