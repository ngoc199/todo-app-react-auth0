import React from "react"
import FilterLink from "../containers/FilterLink"
import { VisibilityFilter } from "../actions"
import "./FilterOptions.css"

const FilterOptions = () => (
  <section id="filter-options">
    Show <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>,{" "}
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>,{" "}
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </section>
)

export default FilterOptions
