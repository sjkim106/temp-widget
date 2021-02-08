
function EventItemCard(_props) {
    console.log(_props);
    const isDisplay = (_props.isClicked == "active") ? "block" : "none";
    return (
        <div className="list_card">
            <div className="card_txt">{_props.index + 1}</div>
            <div className="card_txt">재난</div>
            <div className="card_txt">재난 CCTV 남해읍 3FD-cvt-9610</div>
            <button type="button" className="btn_cctvnet"></button>
            <button type="button" className="btn_expansion"></button>
        </div>       
    );
}

export default EventItemCard;