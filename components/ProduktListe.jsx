import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Link from 'next/link';

export default function ProduktListe({produkte}) {
  return (
    <div>
      <div className='row row-cols-3'>
        {produkte?.map((produkt) => (
          <div key={produkt.name} className="mt-3 col">
            <Card>
              <Link href={`/produkte/${produkt.url}`} passHref>
                  <Card.Img variant="top" src={produkt.bild} />
              </Link>
              <Card.Body>
                <Card.Title>
                  {produkt.name} {produkt.preis.toFixed(2)}€
                </Card.Title>
                <Card.Text>
                  {produkt.beschreibung}
                </Card.Text>
                <Link href={`/produkte/${produkt.url}`} passHref>
                  <Button variant="danger">Bestellen</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br/><br/>
    </div>
  )
}
