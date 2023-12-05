// import {useState} from 'react' 

// const [isDisabled, setIsDisabled] = useState(true)

function handleUpdateInfoPrinter() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('name').removeAttribute('readonly');
    document.getElementById('brand').removeAttribute('disabled');
    document.getElementById('brand').removeAttribute('readonly');
    document.getElementById('model').removeAttribute('disabled');
    document.getElementById('model').removeAttribute('readonly');
    document.getElementById('description').removeAttribute('disabled');
    document.getElementById('description').removeAttribute('readonly');
    document.getElementById('campus').removeAttribute('disabled');
    document.getElementById('campus').removeAttribute('readonly');
    document.getElementById('building').removeAttribute('disabled');
    document.getElementById('building').removeAttribute('readonly');
    document.getElementById('room').removeAttribute('disabled');
    document.getElementById('room').removeAttribute('readonly');
    document.getElementById('status').removeAttribute('disabled');
    document.getElementById('status').removeAttribute('readonly');
}

export default function Printer(props) {
    return (
        <div>
            <div className="text-center">
                <img 
                    src="https://www.midwest.xeroxbusinesssolutions.com/wp-content/uploads/sites/8/2022/10/xerox-altalink-b1800-series-tn.jpg" 
                    alt="printer"
                    style={{
                        width: "190px"
                    }}
                />
                <button 
                    type="button" 
                    className="btn btn-primary"
                    data-bs-toggle="modal" 
                    data-bs-target="#infoPrinter"
                >
                    {props.name}
                </button>
            </div>
            <div className="modal fade" id="infoPrinter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông tin máy in</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row mt-1 mb-1">
                                    <div className="col-4 mt-2">
                                        Tên máy in:
                                    </div>
                                    <div className="col">
                                        <input className="form-control" type="text" value={props.name} id="name" disabled readOnly/>
                                    </div>
                                </div>
                                <div className="row mt-1 mb-1">
                                    <div className="col-4 mt-2">
                                        Hãng sản xuất:
                                    </div>
                                    <div className="col">
                                        <input className="form-control" type="text" value="HP" id="brand" disabled readOnly/>
                                    </div>
                                </div>
                                <div className="row mt-1 mb-1">
                                    <div className="col-4 mt-2">
                                        Loại máy in:
                                    </div>
                                    <div className="col">
                                        <input className="form-control" type="text" value="HP OfficeJet 8015e" id="model" disabled readOnly/>
                                    </div>
                                </div>
                                <div className="row mt-1 mb-1">
                                    <div className="col-4 mt-2">
                                        Mô tả:
                                    </div>
                                    <div className="col">
                                        <textarea className="form-control" type="text" value="Máy in HP OfficeJet 8015 có khả năng in, sao chép, quét và gửi fax một cách hiệu quả. Nó cũng hỗ trợ các tính năng đáng tin cậy như in hai mặt tự động và in từ xa thông qua kết nối Wi-Fi và Bluetooth. Với mẫu mã đẹp và kiểu dáng nhỏ gọn, nó làm cho việc giải quyết các nhu cầu văn phòng dễ dàng hơn." id="description" disabled readOnly/>
                                    </div>
                                </div>
                                <div className="row mt-1 mb-1">
                                    <div className="col-2 mt-2">
                                        Vị trí:
                                    </div>
                                    <div className="col mt-2">
                                        <div>
                                            Cơ sở: 
                                            <select name="campus" id="campus" className="form-control" disabled readOnly>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>    
                                        </div>
                                    </div>
                                    <div className="col mt-2">
                                        Tòa: 
                                        <input className="form-control" type="text" value="B1" id="building" disabled readOnly/>
                                    </div>
                                    <div className="col mt-2">
                                        Phòng: 
                                        <input className="form-control" type="text" value="101" id="room" disabled readOnly/>
                                    </div>
                                </div>
                                <div className="row mt-1 mb-1">
                                    <div className="col-4 mt-2">
                                        Trạng thái:
                                    </div>
                                    <div className="col">
                                        <select name="status" id="status" className="form-control" disabled readOnly>
                                            <option value="on">Đang hoạt động</option>
                                            <option value="off">Đang tắt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" id="update" onClick={handleUpdateInfoPrinter}>Sửa thông tin</button>
                            <button type="button" className="btn btn-secondary" id="delete">Xóa</button>
                            <button type="button" className="btn btn-success" id="on">Kích hoạt</button>
                            <button type="button" className="btn btn-danger" id="off">Vô hiệu hóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}