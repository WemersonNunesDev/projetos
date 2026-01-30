import { Routes, Route } from "react-router-dom"
import Home from "../Home/page"
import Cadastro from "../Cadastro/page"
import Estoque from "../Estoque/page"
import Pendencias from "../Pendencias/page"
import Relatorio from "../Relatorio/page"
import Reservas from "../Reservas/page"

import { Layout } from "../layout/Layout"

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/estoque" element={<Estoque />} />
                <Route path="/pendencias" element={<Pendencias />} />
                <Route path="/relatorio" element={<Relatorio />} />
                <Route path="/reservas" element={<Reservas />} />
            </Route>
        </Routes>
    )
}
