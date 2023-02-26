import Fastify from 'fastify';
import cors from '@fastify/cors';
import {Gpio} from 'pigpio';

const led = new Gpio(17,{ mode: Gpio.OUTPUT, });
led.digitalWrite(1); //Já inicia com o pino UP pois o rele é comum fechado
const app = Fastify({logger:false});
app.register(cors);

app.get('/ligar',async(request,reply)=>{
  led.digitalWrite(0);//Liga a bomba dagua
  
  setTimeout(() => {
    //Após 3 segundos desliga a bomba dagua
    led.digitalWrite(1);
  }, 3000);

  return {message:'ligado'}
});

app.listen({
  port:3334,
  host:'0.0.0.0',
}).then(()=>{
  console.log('Http Server running on port 3334');
});