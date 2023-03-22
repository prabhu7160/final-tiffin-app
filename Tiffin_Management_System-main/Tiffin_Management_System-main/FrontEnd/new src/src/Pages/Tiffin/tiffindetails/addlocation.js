const AddLocation = (props) => {
  const { adr } = props

  const selectArea = () => {
    console.log(adr.locationId)
    sessionStorage['locationId'] = adr.locationId
    props.selectLocation(adr.deliveryArea)
    // console.log(sessionStorage.getItem("orderId"))
  }

  return (
    <div>
      <li>
        <a class='dropdown-item active' onClick={selectArea}>
          {adr.deliveryArea}
        </a>
      </li>
    </div>
  )
}

export default AddLocation
