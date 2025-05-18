import { NotificadorConsole } from "./NotificadorConsole";

export class MensagemConsole implements NotificadorConsole {
  enviar(mensagem: string): void {
    console.log(mensagem);
  }
}
