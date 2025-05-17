// src/Notificacao/CanalConsole.ts

import { CanalDeNotificacao } from "./CanalDeNotificacao";

export class NotificadorConsole  implements CanalDeNotificacao {
  notificar(mensagem: string): void {
    console.log(mensagem);
  }
}
