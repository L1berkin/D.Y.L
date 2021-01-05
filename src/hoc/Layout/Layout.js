import classes from './Layout.module.scss'

function Layout({children}) {
  return (
    <main className={classes.Layout}>
      {children}
    </main>
  );
}

export default Layout;