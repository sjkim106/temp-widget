
function EventItemCard(_props) {
    console.log(_props);
    const isDisplay = (_props.isClicked == "active") ? "block" : "none";
    return (
        <div className={"list_card " + _props.isClicked } onClick={() => _props.itemEvent(_props.itemIndex)}>                        
            <button type="button" className="btn_show"></button>
            <div className="card_head">
            <div className="card_head_txt">{_props.itemData.type}</div>
            <div className="card_head_txt">{_props.itemData.state}</div>
            <div className="card_head_txt">{_props.itemData.address}</div>
            <div className="card_head_txt">{_props.itemData.createdTime}</div>
            </div>
            <div className="card_body" style={{display : isDisplay}}>
            <div className="card_row">
                <div className="card_title">위도</div>
                <div className="card_loc">{_props.itemData.position.lat}</div>
                <div className="card_title">경도</div>
                <div className="card_loc">{_props.itemData.position.lon}</div>
            </div>
            <div className="card_row card_info">
                <div className="card_title">내용</div>
                <div className="card_info_txt">{_props.itemData.contents}</div>
            </div>
            </div>
        </div>
    );
}

export default EventItemCard;