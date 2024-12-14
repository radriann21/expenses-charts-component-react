import logo from "../assets/icons/logo.svg"
import data from "../data.json"
import { ChartsComponent } from "./ChartsComponent"
import { Divider } from "./Divider"

export const MainComponent = () => {

  const maxAmount = Math.max(...data.map((entry: DataProps) => entry.amount));

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
        <ChartsComponent data={data} maxAmount={maxAmount} />
        <Divider />
        <section className="flex items-center justify-between">
          <div>
            <span className="text-sm text-neutral-medium-brown">Total this month</span>
            <span className="block text-lg sm:text-2xl md:text-3xl font-bold text-neutral-dark-brown">$478.33</span>
          </div>
          <div className="text-right text-sm">
            <span className="text-neutral-dark-brown font-bold">+2.4%</span>
            <span className="block text-neutral-medium-brown">from last month</span>
          </div>
        </section>
      </section>
    </article>
  )
}