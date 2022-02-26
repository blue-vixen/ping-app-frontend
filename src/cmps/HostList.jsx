import { HostPreview } from "./HostPreview"

export function HostList({ hosts }) {
    return (
        <section>
            <table className='host-list'>
                <thead>
                    <tr>
                        <th>Top Ping Sites</th>
                        <th>Ping Count</th>
                    </tr>
                </thead>
                <tbody>
                    {hosts.map(host =>
                        <HostPreview host={host} key={host._id} />
                    )}
                </tbody>
            </table>
        </section>
    )
}