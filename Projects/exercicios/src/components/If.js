// componente sem JSX, procede-se normalmente, porem nada que tratará de front

export default props => {
     if(props.teste){
          return props.children
     }
     else{
          return false
     }
}