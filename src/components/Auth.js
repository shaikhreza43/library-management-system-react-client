import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Navigate, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        target={"_blank"}
        href="https://developerahmed.web.app/"
      >
        Shaikh Ahmed Reza
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth(props) {
  const [roles, setRoles] = React.useState([
    { roleId: 1, roleName: "admin", roleDescription: "Admin" },
    { roleId: 2, roleName: "librarian", roleDescription: "Librarian" },
    { roleId: 3, roleName: "student", roleDescription: "Student" },
  ]);

  const [selectedRole, setSelectedRole] = React.useState("admin");
  const [toggleLoginAndForgotPassword, setToggleLoginAndForgotPassword] =
    React.useState(true);

  const navigate = useNavigate();

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      role: data.get("role"),
    });
    localStorage.setItem(
      "session",
      JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
        role: data.get("role"),
        name:"xyz"
      })
    );
    if (data.get("role") === "admin") {
      navigate("/admin-dashboard");
    } else if (data.get("role") === "librarian") {
      navigate("/librarian-dashboard");
    } else if (data.get("role") === "student") {
      navigate("/student-dashboard");
    }
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {toggleLoginAndForgotPassword && (
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleAuthSubmit}
                sx={{ mt: 1 }}
              >
                <Select
                  defaultValue="admin"
                  label="Role"
                  name="role"
                  id="role"
                  fullWidth
                  required
                  autoFocus
                  margin="dense"
                  variant="filled"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map((role) => (
                    <MenuItem value={role.roleName} key={role.roleId}>
                      {role.roleDescription}
                    </MenuItem>
                  ))}
                </Select>
                {(selectedRole === "admin" || selectedRole === "librarian") && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}

                {selectedRole === "student" && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="rollNumber"
                    label="Roll Number"
                    name="rollNumber"
                    type="text"
                    autoFocus
                  />
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setToggleLoginAndForgotPassword(false)}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          )}

          {!toggleLoginAndForgotPassword && (
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Reset Password
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleResetPassword}
                sx={{ mt: 1 }}
              >
                <Select
                  defaultValue="admin"
                  label="Role"
                  name="resetPassowrdRole"
                  id="resetPassowrdRole"
                  fullWidth
                  required
                  autoFocus
                  margin="dense"
                  variant="filled"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map((role) => (
                    <MenuItem value={role.roleName} key={role.roleId}>
                      {role.roleDescription}
                    </MenuItem>
                  ))}
                </Select>
                {(selectedRole === "admin" || selectedRole === "librarian") && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}

                {selectedRole === "student" && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="rollNumber"
                    label="Roll Number"
                    name="rollNumber"
                    type="text"
                    autoFocus
                  />
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Reset Password
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setToggleLoginAndForgotPassword(true)}
                    >
                      Go Back?
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
