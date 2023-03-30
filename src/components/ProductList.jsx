import ItemList from './ItemList';

// images
import Monitor01 from '../assets/img/monitor/monitor01.jpg';
import Monitor02 from '../assets/img/monitor/monitor02.jpg';

function ProductList() {
  return (
    <div id="ProductList" className="container">
      <ItemList
        image={[Monitor01, Monitor02]}
        title='Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50'
        price={['R$ 2.813,99', 'R$ 2.599,00']}
        installments="12x de R$ 260,58"
        id="1"
      />

      <ItemList
        image={[Monitor01, Monitor02]}
        title='Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50'
        price={['R$ 2.813,99', 'R$ 2.599,00']}
        installments="12x de R$ 260,58"
        id="2"
      />

      <ItemList
        image={[Monitor01, Monitor02]}
        title='Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50'
        price={['R$ 2.813,99', 'R$ 2.599,00']}
        installments="12x de R$ 260,58"
        id="3"
      />
    </div>
  );
}

export default ProductList;
