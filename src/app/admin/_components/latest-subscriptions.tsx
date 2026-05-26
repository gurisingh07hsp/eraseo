'use client';

import { Loader } from 'lucide-react';
import React from 'react';
import moment from 'moment';

import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

import { useSubscriptionsTable } from '../billing/subscriptions/_services/subscription-hooks';

const LatestSubscriptions = () => {
  const { data, isFetching } = useSubscriptionsTable(6);

  return (
    <div>
      <h2 className="font-semibold text-md">Latest Subscriptions</h2>
      <div className="bg-card rounded-lg border mt-3 overflow-auto min-h-[300px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">User</TableHead>
              <TableHead className="text-left">Plan</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead className="text-left">Current Billing Cycle</TableHead>
              <TableHead className="text-left">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="min-h-[300px] flex items-center justify-center">
                    <Loader className="animate-spin" />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data?.docs?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <div className="text-sm font-semibold">{item.user.name}</div>
                      <div className="text-xs text-muted-foreground">{item.user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.plan.name}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className="capitalize"
                      variant={item.status === 'active' ? 'success' : 'secondary'}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-[13px]">
                        {moment(item.currentPeriodStart).format('DD/MM/YYYY')}
                      </div>
                      -{' '}
                      <div className="text-[13px]">
                        {moment(item.currentPeriodEnd).format('DD/MM/YYYY')}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* <Moment format="DD/MM/YYYY" className="text-[13px]">
                      {item.createdAt}
                    </Moment> */}
                    <div className="text-[13px]">{moment(item.createdAt).format('DD/MM/YYYY')}</div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestSubscriptions;
