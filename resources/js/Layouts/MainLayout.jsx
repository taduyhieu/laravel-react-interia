import { Head } from '@inertiajs/react';
import MainMenu from '@/Components/Menu/MainMenu';
import FlashMessages from '@/Components/Messages/FlashMessages';
import TopHeader from '@/Components/Header/TopHeader';
import BottomHeader from '@/Components/Header/BottomHeader';

// interface MainLayoutProps {
//     title?: string;
//     children: React.ReactNode;
// }

export default function MainLayout({ title, children }) {
    return (import { Link, usePage } from '@inertiajs/react';
    import MainLayout from '@/Layouts/MainLayout';
    import FilterBar from '@/Components/FilterBar/FilterBar';
    import Pagination from '@/Components/Pagination/Pagination';
    import { Organization, PaginatedData } from '@/types';
    import Table from '@/Components/Table/Table';
    import { Trash2 } from 'lucide-react';

    function Index() {
        const { organizations } = usePage<{
            organizations: PaginatedData<Organization>;
        }>().props;

        const {
            data,
            meta: { links }
        } = organizations;

        return (
            <div>
                <h1 className="mb-8 text-3xl font-bold">Organizations</h1>
                <div className="flex items-center justify-between mb-6">
                    <FilterBar />
                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route('organizations.create')}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Organization</span>
                    </Link>
                </div>
                <Table
                    columns={[
                        {
                            label: 'Name',
                            name: 'name',
                            renderCell: row => (
                                <>
                                    {row.name}
                                    {row.deleted_at && (
                                        <Trash2 size={16} className="ml-2 text-gray-400" />
                                    )}
                                </>
                            )
                        },
                        { label: 'City', name: 'city' },
                        { label: 'Phone', name: 'phone', colSpan: 2 }
                    ]}
                    rows={data}
                    getRowDetailsUrl={row => route('organizations.edit', row.id)}
                />
                <Pagination links={links} />
            </div>
        );
    }

    /**
     * Persistent Layout (Inertia.js)
     *
     * [Learn more](https://inertiajs.com/pages#persistent-layouts)
     */
    Index.layout = (page: React.ReactNode) => (
        <MainLayout title="Organizations" children={page} />
    );

    export default Index;

    <>
        <Head title={title} />
        <div className="flex flex-col">
            <div className="flex flex-col h-screen">
                <div className="md:flex">
                    <TopHeader />
                    <BottomHeader />
                </div>
                <div className="flex flex-grow overflow-hidden">
                    <MainMenu className="flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-indigo-800 md:block" />
                    {/**
                     * We need to scroll the content of the page, not the whole page.
                     * So we need to add `scroll-region="true"` to the div below.
                     *
                     * [Read more](https://inertiajs.com/pages#scroll-regions)
                     */}
                    <div
                        className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12"
                        scroll-region="true"
                    >
                        <FlashMessages />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
