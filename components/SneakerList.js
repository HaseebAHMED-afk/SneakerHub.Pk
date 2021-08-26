
import { Card, Button, ListGroupItem, ListGroup, Row , Col} from 'react-bootstrap'
import SneakerCard from './SneakerCard'


const SneakerList = ({sneakers}) => {
    return (
        <div>
             <Row xs={1} md={2} lg={3} className="g-4" >
            {
                sneakers.map((sneaker) => (
               <SneakerCard sneaker={sneaker} />
                ))
            }
        </Row>
        </div>
    )
}

export default SneakerList
