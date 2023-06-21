import styles from '@/styles/Footer.module.css'

export default function Footer ( props ) {
    return(
        <div className={ styles.Footer }fixed="bottom">
          Proyecto Codo a Codo 2023
          { props.children }
        </div>
    )
}