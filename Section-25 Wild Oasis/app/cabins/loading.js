import Spinner from "@/app/_components/Spinner"

export default function Loading() {
  return (
    <div className="grid items-center text-xl text-primary-200 justify-center">
      <Spinner />
      <span>
        <p className="">Loading cabin data...</p>
      </span>
    </div>
  )
}
