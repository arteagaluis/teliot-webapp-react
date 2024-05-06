import Menu from '../../components/Menu/index.jsx';
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
