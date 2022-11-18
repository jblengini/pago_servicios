import "./Style.scss";
import jsonData from './cards.json';

const loadData = () => JSON.parse(JSON.stringify(jsonData));
console.log(jsonData);
console.log(jsonData[0].id);


function CardsPage() {
    return (
        <div className="wrapper">
        <Card
          factura= {jsonData[0].factura}
          fecha_emision={jsonData[0].fecha_emision}
          tipo={jsonData[0].tipo}
          importe_total={jsonData[0].importe_total }
          saldo={jsonData[0].saldo}
          importe= {jsonData[0].importe}
        />
          <Card
          factura= {jsonData[1].factura}
          fecha_emision={jsonData[1].fecha_emision}
          tipo={jsonData[1].tipo}
          importe_total={jsonData[1].importe_total }
          saldo={jsonData[1].saldo}
          importe= {jsonData[1].importe}
        />
        <Card
          factura= {jsonData[2].factura}
          fecha_emision={jsonData[2].fecha_emision}
          tipo={jsonData[2].tipo}
          importe_total={jsonData[2].importe_total }
          saldo={jsonData[2].saldo}
          importe= {jsonData[2].importe}
        />

      </div>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{props.factura}</h2>
          <p className="card__description">{props.fecha_emision}</p>
          <p className="card__description">{props.tipo}</p>
          <h3 className="card__price">{props.importe_total}</h3>
          <h3 className="card__price">{props.saldo}</h3>
          <h3 className="card__price">{props.importe}</h3>
          <button className="card__btn">Pagar</button>
        </div>
      </div>
    );
  }
  
  export default CardsPage

  