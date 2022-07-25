package school.devskill.Labirinto.ServiceGiocoOca.Classes;

import org.springframework.stereotype.Service;
import school.devskill.Labirinto.EccezioniGiocoOca.AzioneNonPermessaException;
import school.devskill.Labirinto.EccezioniGiocoOca.GiocoInCorsoException;
import school.devskill.Labirinto.ElementiDiGiocoGiocoOca.CasellaNumerica;
import school.devskill.Labirinto.ElementiDiGiocoGiocoOca.CasellaStop;
import school.devskill.Labirinto.ElementiDiGiocoGiocoOca.ICasellaSpeciale;
import school.devskill.Labirinto.ElementiDiGiocoGiocoOca.Player;
import school.devskill.Labirinto.ServiceGiocoOca.Interfaces.IBoardManager;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class BoardManager implements IBoardManager {

    private List<Player>players;
    private List<ICasellaSpeciale>caselle;
    private final int dimensioneBoard=14;
    private boolean isOver=false;
    private boolean partitaInCorso;

    public BoardManager() {
        this.players = new ArrayList<>();
        caselle = new ArrayList<>();
        creaBoard();
        partitaInCorso=false;
    }

    private void agggiugniGiocatore(Player p) throws GiocoInCorsoException {
        if(partitaInCorso)
            throw new GiocoInCorsoException();
        players.add(p);
    }

    private int lancioDadi(){
        Random random = new Random();
        return random.nextInt(7-1)+1;
    }

    public void Reset(){
        isOver=false;
        for (int i=0;i< players.size();i++){
            Player playercorrente= players.get(i);
            playercorrente.setPosizione(0);
            playercorrente.setNumeroLanci(0);
            playercorrente.setStop(false);
        }
    }


    public String giocaTurno(){
        if(!partitaInCorso)
            partitaInCorso=true;

        for (int i=0;i < players.size();i++){
            Player corrente= players.get(i);

            if (!corrente.isStop()){
                int risultatoDato=lancioDadi();
                int casellaDiArrivoTemporanea= corrente.getPosizione()+risultatoDato;
                corrente.setUltimoTiro(risultatoDato);
                if (casellaDiArrivoTemporanea>=dimensioneBoard){
                    isOver=true;
                    break;
                }

                ICasellaSpeciale casellaArrivo= caselle.get(casellaDiArrivoTemporanea);

//                if(casellaArrivo != null){
//                    if (!casellaArrivo.isStop()){
//                        casellaDiArrivoTemporanea = casellaArrivo.calcolaPosizione(casellaDiArrivoTemporanea);
//                    }else {
//                        corrente.setStop(true);
//                    }
//                }

                if (casellaArrivo != null){
                    try {
                        casellaDiArrivoTemporanea = casellaArrivo.calcolaPosizione(casellaDiArrivoTemporanea);
                    }catch (AzioneNonPermessaException e){
                        e.printStackTrace();
                        corrente.setStop(true);
                    }finally {
                        corrente.aggiungiLancio();
                        corrente.setPosizione(casellaDiArrivoTemporanea);
                    }
                }

                corrente.aggiungiLancio();
                corrente.setPosizione(casellaDiArrivoTemporanea);
            }else {
                corrente.setStop(false);
            }
        }
        if(isOver){
            partitaInCorso= !partitaInCorso;
            return "Game Over";
        }

        return "Turno Concluso"+players;

    }

    private void creaBoard() {
        for (int i= 0; i<dimensioneBoard; i++){
            switch (i) {
                case 1 -> caselle.add(new CasellaNumerica(2));
                case 5 -> caselle.add(new CasellaNumerica(-1));
                case 7 -> caselle.add(new CasellaNumerica(3));
                case 8 -> caselle.add(new CasellaNumerica(0));
                case 9 -> caselle.add(new CasellaStop());
                case 12 -> caselle.add(new CasellaNumerica(-3));
                default -> caselle.add(null);
            }
        }

    }


}
