import { BsGoogle } from "../../assets/icons";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Helmet } from "react-helmet";

const index = () => {
  const { handleGoogleLogin, handleSignIn, value, setValue } = useAuth();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Sign in to your account on our platform and access exclusive features. Secure and convenient login process for a personalized experience. Join us today and enjoy the benefits of our service."
        />
        <title>Sign-in Kazuna Live - Streaming Anime Sub Indo</title>
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Kazuna Live - Streaming Anime Sub Indo"
        />
        <meta
          property="og:description"
          content="Sign in to your account on our platform and access exclusive features. Secure and convenient login process for a personalized experience. Join us today and enjoy the benefits of our service."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
        />
        <meta property="og:url" content={import.meta.env.VITE_PUBLIC_DOMAIN} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kyouka Live" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kazuna Live - Streaming Anime Sub Indo"
        />
        <meta
          name="twitter:description"
          content="Sign in to your account on our platform and access exclusive features. Secure and convenient login process for a personalized experience. Join us today and enjoy the benefits of our service."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
        />
        <link rel="canonical" content={import.meta.env.VITE_PUBLIC_DOMAIN} />
      </Helmet>
      <div className="w-[90%] mt-6 md:w-[40%] m-auto">
        <div className="flex flex-col  justify-center">
          <div className="thubmnail flex justify-center">
            <img
              src={logo}
              alt=""
              className=" rounded-full w-32 h-32 ring-4 bg-blend-darken opacity-80 shadow-sm shadow-white ring-slate-100"
            />
          </div>
          <form
            action=""
            className="flex flex-col gap-5 mt-5"
            onSubmit={handleSignIn}
          >
            <div className="email flex flex-col gap-3">
              <label htmlFor="email" className="text-white  font-outfits ">
                Email{" "}
              </label>
              <input
                type="text"
                value={value.email}
                name="email"
                id="email"
                placeholder=" Email address.."
                className=" py-3 px-4 rounded-md bg-transparent ring-1 ring-gray-600  duration-200 outline-none focus:ring-1 focus:ring-slate-200 text-gray-400 focus:placeholder:text-gray-300 placeholder:text-slate-300 text-base "
                required
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>
            <div className="password flex flex-col gap-3">
              <label htmlFor="password" className="text-white  font-outfits ">
                Password{" "}
              </label>
              <input
                type="password"
                value={value.password}
                name="password"
                id="password"
                placeholder="Password"
                className=" py-3 px-4 rounded-md bg-transparent ring-1 ring-gray-600  duration-200 outline-none focus:ring-1 focus:ring-slate-200 text-gray-400 focus:placeholder:text-gray-300 placeholder:text-slate-300 text-base "
                required
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
            </div>
            <div className="rememberMe flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-white text-[15px] ">Remember me</span>
            </div>
            <div className="btnGroup ">
              <button className="btn text-white w-full px-3 py-3 rounded-md bg-blue-600 font-medium text-base">
                Sign In
              </button>
              <p className="text-white mt-2 text-sm py-2">
                Don't have Account?
                <Link to="/sign-up" className="text-blue-500 font-medium">
                  {" "}
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
          <button
            className="btn mt-3 text-white w-full px-3 py-3 rounded-md  font-medium text-base bg-red-600 hover:bg-red-700 duration-300"
            onClick={handleGoogleLogin}
          >
            <div className="flex items-center justify-center gap-2">
              <BsGoogle className="text-lg " />
              <span>Sign Up with Google</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
