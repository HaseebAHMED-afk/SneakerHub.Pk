
import Link from 'next/link'
import { Card, Button, Col} from 'react-bootstrap'

const SneakerCard = ({ sneaker }) => {
    return (
        
               <Col>
                <Card style={{ width: '18rem' }}>
                    {sneaker.media.imageUrl ? <Card.Img variant="top" src={`${sneaker.media.imageUrl}`} /> : null}
                    <Card.Body>
                        <Card.Title>{sneaker.shoe}</Card.Title>
                        <Link href="/sneaker/[id]" as={`/sneaker/${sneaker.id}`} >
                        <Button variant="primary">Check it out</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
    )
}

export default SneakerCard
