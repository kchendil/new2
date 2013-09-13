#!/bin/sh

#
# DESCRIPTION:
# This is an RMA(Role Mapping Administrator) uninstall script for
# Linux platform.
#

cmd=`basename $0`
silentMode="false"
invalidCmdMsg="ERROR: Invalid command line argument!"

# Get the rma install directory
dir1=`dirname $0`
cd $dir1
rmaDir=`pwd`

# Display the command usage
Usage()
{
   echo "Usage: $cmd [-h] [-s]"
   echo "   -h  Help"
   echo "   -s  Silent mode"
   exit 1
}

# Validate the command line inputs parameters
if [ $# -gt 1 ]; then
     echo "$invalidCmdMsg"
     Usage 
fi

case "$1" in
   -h)
      Usage
   ;;
   -s)
      silentMode="true"
   ;;
esac

# Perform uninstall operation
if [ "$silentMode" = "false" ];then
   echo -n "Do you want to uninstall RMA from the location \"${rmaDir}\" (yes/no)? "
   read input
   if [ "$input" != "yes" ]; then
      exit 0
   fi
fi

# Stop RMA service
${rmaDir}/stop.sh > /dev/null

# Remove RMA init scripts
if [ "$LOGNAME" = "root" ]; then
   /sbin/chkconfig -d rma_init > /dev/null
   rm /etc/init.d/rma_init > /dev/null
fi
rm -rf $rmaDir

