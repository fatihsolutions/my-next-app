import CountrySelectorMin from "../../components/transport/countryselectormin";
import Transport from "../../components/transport/transportselect";
import TicketsCards from '../../components/transport/Tickets';
import Mistake from "../../components/transport/mistake";

export default function TransportPage() {

    return (
        <div className="bg-gray-100 m-0 p-0">


            <div className="text-center">

                <h1>Public Transport</h1>
                <p>Everything you need to get around</p></div>


            <CountrySelectorMin />

        </div>
    )

}