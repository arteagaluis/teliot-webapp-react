import Menu from '../../components/Menu/index.jsx';
import styles from './styles.module.scss';
export const metadata = {
  title: 'Dashboard',
  description: 'App para telemetria',
};
export default function DashboardLayout({ children }) {
  return (
    <>
      <section className={styles.container__layout}>
        {children}
        <Menu />
      </section>
    </>
  );
}
