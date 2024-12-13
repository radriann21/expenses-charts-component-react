import logo from "../assets/icons/logo.svg"

export const MainComponent = () => {
  return (
    <article className="w-[380px] h-fit flex flex-col">
      <section className="w-full bg-primary-soft-red flex justify-between items-center p-6 rounded-md">
        <div className="space-y-4">
          <p className=" text-white">My balance</p>
          <span className="text-2xl font-semibold text-white">$921.48</span>
        </div>
        <img className="w-10" src={logo} alt="logo of the application" />
      </section>
    </article>
  )
}