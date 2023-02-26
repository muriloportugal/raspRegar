import Fastify from 'fastify';
import cors from '@fastify/cors';
import {Gpio} from 'pigpio';

const led = new Gpio(17,{ mode: Gpio.OUTPUT, });
led.digitalWrite(1); //Já inicia com o pino UP
const app = Fastify({logger:false});
app.register(cors);

app.get('/ligar',async(request,reply)=>{
  led.digitalWrite(0);
  //Após 3 segundos desliga
  setTimeout(() => {
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