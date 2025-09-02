import { useState } from "react"
import ApperIcon from "@/components/ApperIcon"
import Input from "@/components/atoms/Input"
import { cn } from "@/utils/cn"

const SearchBar = ({ 
  onSearch, 
  placeholder = "Search...", 
  className,
  debounceMs = 300 
}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (value) => {
    setSearchTerm(value)
    if (onSearch) {
      // Simple debounce implementation
      clearTimeout(handleSearch.timeout)
      handleSearch.timeout = setTimeout(() => {
        onSearch(value)
      }, debounceMs)
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <ApperIcon name="Search" className="h-4 w-4 text-slate-400" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 bg-white shadow-sm"
      />
    </div>
  )
}

export default SearchBar