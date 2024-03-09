import { putQuote } from "../actions/myActions"
import { RootState } from '../utils/type'
import { useDispatch, useSelector } from 'react-redux'


const OneComponent = () => {

  const dispatch = useDispatch()
const quote = useSelector<RootState, any>(state => state.quote)

const fetchQuote = () => {
    fetch('https://api.gameofthronesquotes.xyz/v1/random')
    .then(response => response.json())
    .then(data => data.sentence)
    .then(quote => dispatch(putQuote(quote as string)))
    .catch(() => dispatch(putQuote('Error')))
}

  return (
    <div>
        <h2>{quote}</h2>
        <button onClick={fetchQuote}>Get quote</button>
    </div>
  )
}

export default OneComponent