import logo from "../assets/icons/logo.svg"
import { ChartsComponent } from "./ChartsComponent"
import { Divider } from "./Divider"

export const MainComponent = () => {
  return (
    <article className="w-full md:w-[420px] h-fit flex flex-col">
      <section className="w-full bg-primary-soft-red flex justify-between items-center p-6 rounded-md">
        <div className="space-y-4">
          <p className=" text-white">My balance</p>
          <span className="text-lg sm:text-2xl font-semibold text-white">$921.48</span>
        </div>
        <img className="w-10" src={logo} alt="logo of the application" />
      </section>

      <section className="mt-4 p-6 rounded-md bg-neutral-very-pale-orange">
        <h1 className="font-bold text-lg sm:text-2xl text-neutral-dark-brown">Spending - Last 7 days</h1>
        <ChartsComponent />
        <Divider />
      </section>
    </article>
  )
}