import classes from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={classes.Layout}>
      {children}
    </div>
  );
}

export default Layout;