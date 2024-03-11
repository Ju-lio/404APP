import React from 'react'

const Phrase = () => {
  const [number, setNumber] = React.useState(0)

  React.useEffect(() => {
    const n = Math.floor(Math.random() * 2)
    setNumber(n)
  },[])

  const phrases = [
    {
      text: '"Grandes coisas são feitas de pequenas coisinhas".',
      author: 'Vicent Van Gogh'
    },
    {
      text: '"Se você não sabe para onde ir qualquer caminho serve".',
      author: 'Cheshire'
    },
    {
      text: '"Permita que se enganem a seu respeito e então viva, viva livre, sem medo, Porque o “outro” não tem mais poder sobre você.".',
      author: 'Nina Zobarzo'
    },
  ]
  return (
    <div className='phrase'>
      <div>
        <br />
          <p>{phrases[number].text}</p>
          <h2>~{phrases[number].author}</h2>
        <br />
      </div>
    </div>
  )
}

export default Phrase