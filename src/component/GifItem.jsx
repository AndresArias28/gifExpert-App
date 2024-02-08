export const GifItem = ({ title, url }) => {//desestrucutra las props(que contiene todo los atributos esparcidos)
    
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    )
}
