import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function LoginPage() {
  return (
    <form className={styles.loginContainer} action="" method="POST">
      <div className="mb-3">
        <label className="form-check-label" htmlFor="username">Email</label>
        <input
          className="form-control"
          type="text"
          id="username"
          name="username"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-check-label" htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="remember"
        />
        <label className="form-check-label" htmlFor="remember">Remember</label>
      </div>
      <button className="btn btn-primary" type="submit">로그인</button>
    </form>
  )
}