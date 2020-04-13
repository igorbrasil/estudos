import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * IOs com emulador:localhost
 * IOs fisico: IP da maquina
 * Android com emulador: localhost (adb reverse tcp:3333 tcp:3333 )
 * Android com emulador: 10.0.2.2 (Androi Studio)
 * Android com emulador: 10.0.3.2 (Genymontion)
 * Android fisico: IP da maquina
 */
