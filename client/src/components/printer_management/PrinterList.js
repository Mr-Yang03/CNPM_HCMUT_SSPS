import Printer from "./Printer"

export default function PrinterList() {
    return (
        <div className="container">
            <div className="row">
                <div className="col border border-black border-2 rounded m-1 p-1">
                    <Printer name="Máy in 1" />
                </div>
                <div className="col border border-black border-2 rounded m-1 p-1">
                    <Printer name="Máy in 2" />
                </div>
                <div className="col border border-black border-2 rounded m-1 p-1">
                    <Printer name="Máy in 3" />
                </div>
                <div className="col border border-black border-2 rounded m-1 p-1">
                    <Printer name="Máy in 4" />
                </div>
                <div className="col border border-black border-2 rounded m-1 p-1">
                    <Printer name="Máy in 5" />
                </div>
            </div>
        </div>
    )
}