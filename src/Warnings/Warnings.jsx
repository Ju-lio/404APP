import React from 'react'

const Warnings = () => {
  const warnings = [
    'Seg - Arroz, Feijão',
    'Ter - Arroz, Feijão',
    'Qua - Arroz, Feijão',
    'Qui - Arroz, Feijão',
    'Sex - Arroz, Feijão',
  ]

  return (
    <div className='warnings'>
      <h2>CARDÁPIO</h2>
      <div>
        <br />
        {warnings.map((w, index) => (
          <li key={index}>{w}</li>
        ))}
      </div>
    </div>
  )
}

export default Warnings