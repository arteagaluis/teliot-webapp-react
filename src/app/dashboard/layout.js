import Menu from '../../components/Menu/index.jsx';
export const metadata = {
  title: 'Dashboard',
  description: 'App para telemetria',
};
export default function DashboardLayout({ children }) {
  return (
    <>
      <section>
        <Menu />

        {children}
      </section>
    </>
  );
}
