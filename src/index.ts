import Fastify from 'fastify';
import cors from '@fastify/cors';
import {Gpio} from 'pigpio';

const led = new Gpio(17,{ mode: Gpio.OUTPUT });

const app = Fastify({logger:false});
app.register(cors);

app.get('/liga',async(request,reply)=>{
  led.digitalWrite(1);
  return {message:'ligado'}
});

app.get('/desligado',async(request,reply)=>{
  led.digitalWrite(0);
  return {message:'desligado'}
});

app.listen({
  port:3334,
  host:'0.0.0.0',
}).then(()=>{
  console.log('Http Server running on port 3334');
});