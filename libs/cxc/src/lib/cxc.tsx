import styles from './cxc.module.scss';

/* eslint-disable-next-line */
export interface CxcProps {}

export function Cxc(props: CxcProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cxc!</h1>
    </div>
  );
}

export default Cxc;
