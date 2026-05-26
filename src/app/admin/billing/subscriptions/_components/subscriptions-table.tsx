'use client';

import { SubscriptionStatus } from '@prisma/client';
import React from 'react';
import moment from 'moment';

import DataTable from '@/components/datatable';
import { Badge } from '@/components/ui/badge';

import { toCapitalize } from '@/lib/utils';

import { useSubscriptionsTable } from '../_services/subscription-hooks';

const SubscriptionsTable = () => {
  const { setFilter, data, isFetching, filters } = useSubscriptionsTable();

  return (
    <>
      <DataTable
        title="Subscriptions"
        pagination={{
          page: filters.page,
          limit: filters.limit,
          totalPages: data?.pagination.totalPages || 1,
          setPage: (page) => setFilter({ page }),
          setLimit: (limit) => setFilter({ limit }),
        }}
        sort={{
          key: filters.sort,
          order: filters.order,
          onSort: (key, order) => setFilter({ sort: key, order }),
        }}
        isLoading={isFetching}
        data={data?.docs || []}
        columns={[
          {
            title: 'User',
            key: 'user',
            maxWidth: 250,
            render: (_, row) => {
              return (
                <div>
                  <div className="text-sm font-semibold">{row.user.name}</div>
                  <div className="text-xs text-muted-foreground">{row.user.email}</div>
                </div>
              );
            },
          },
          {
            title: 'Plan',
            key: 'plan',
            sortable: true,
            render: (_, row) => {
              return <Badge variant="secondary">{row.plan.name}</Badge>;
            },
          },
          {
            title: 'Status',
            key: 'status',
            sortable: true,
            render: (status) => {
              return (
                <Badge
                  className="capitalize"
                  variant={status === 'active' ? 'success' : 'secondary'}
                >
                  {status}
                </Badge>
              );
            },
          },
          {
            title: 'Current Billing Cycle',
            key: 'currentPeriodStart',
            sortable: true,
            render: (_, row) => {
              return (
                <div className="text-sm">
                  <div className="text-[13px]">
                    {moment(row.currentPeriodStart).format('DD/MM/YYYY')}
                  </div>
                  -{' '}
                  <div className="text-[13px]">
                    {moment(row.currentPeriodEnd).format('DD/MM/YYYY')}
                  </div>
                </div>
              );
            },
          },
          {
            title: 'Created At',
            key: 'createdAt',
            sortable: true,
            render: (value) => {
              return <div className="text-[13px]">{moment(value).format('DD/MM/YYYY')}</div>;
            },
          },
        ]}
        filters={[
          {
            type: 'multi-select',
            key: 'status',
            label: 'Status',
            value: filters.status,
            options: Object.keys(SubscriptionStatus).map((role) => ({
              label: toCapitalize(role),
              value: role,
            })),
            onFilter: (value) => {
              setFilter({ status: value as SubscriptionStatus[] });
            },
          },
        ]}
      />
    </>
  );
};

export default SubscriptionsTable;
